import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useVisitorTracking = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // Get visitor's IP (simplified - in production you'd use a proper IP service)
        const visitorId = localStorage.getItem('visitor_id') || Math.random().toString(36).substr(2, 9);
        localStorage.setItem('visitor_id', visitorId);

        // Check if this is a unique visitor
        const { data: existingVisitor } = await supabase
          .from('unique_visitors')
          .select('id')
          .eq('visitor_ip', visitorId)
          .maybeSingle();

        if (!existingVisitor) {
          // Add new unique visitor
          await supabase
            .from('unique_visitors')
            .insert({ visitor_ip: visitorId });

          // Update total visitor count
          const { data: stats } = await supabase
            .from('visitor_stats')
            .select('total_visitors')
            .single();

          if (stats) {
            await supabase
              .from('visitor_stats')
              .update({ total_visitors: stats.total_visitors + 1 })
              .eq('total_visitors', stats.total_visitors);
          }
        }

        // Get current visitor count
        const { data: currentStats } = await supabase
          .from('visitor_stats')
          .select('total_visitors')
          .single();

        if (currentStats) {
          setVisitorCount(currentStats.total_visitors);
        }
      } catch (error) {
        console.error('Error tracking visitor:', error);
      }
    };

    trackVisitor();
  }, []);

  return { visitorCount };
};