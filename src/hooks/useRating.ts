import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useRating = () => {
  const [currentRating, setCurrentRating] = useState<number>(0);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [totalRatings, setTotalRatings] = useState<number>(0);
  const [hasRated, setHasRated] = useState<boolean>(false);
  const { toast } = useToast();

  const visitorId = localStorage.getItem('visitor_id') || Math.random().toString(36).substr(2, 9);

  useEffect(() => {
    localStorage.setItem('visitor_id', visitorId);
    fetchRatingData();
  }, []);

  const fetchRatingData = async () => {
    try {
      // Get all ratings for average calculation
      const { data: allRatings } = await supabase
        .from('website_ratings')
        .select('rating');

      if (allRatings && allRatings.length > 0) {
        const total = allRatings.reduce((sum, r) => sum + r.rating, 0);
        setAverageRating(total / allRatings.length);
        setTotalRatings(allRatings.length);
      }

      // Check if current visitor has already rated
      const { data: userRating } = await supabase
        .from('website_ratings')
        .select('rating')
        .eq('visitor_ip', visitorId)
        .maybeSingle();

      if (userRating) {
        setCurrentRating(userRating.rating);
        setHasRated(true);
      }
    } catch (error) {
      console.error('Error fetching rating data:', error);
    }
  };

  const submitRating = async (rating: number) => {
    try {
      if (hasRated) {
        // Update existing rating
        const { error } = await supabase
          .from('website_ratings')
          .update({ rating })
          .eq('visitor_ip', visitorId);

        if (error) throw error;

        toast({
          title: "Rating Updated!",
          description: `Your rating has been updated to ${rating} stars.`,
        });
      } else {
        // Insert new rating
        const { error } = await supabase
          .from('website_ratings')
          .insert({ visitor_ip: visitorId, rating });

        if (error) throw error;

        toast({
          title: "Thank you for rating!",
          description: `You rated this website ${rating} stars.`,
        });
        setHasRated(true);
      }

      setCurrentRating(rating);
      await fetchRatingData(); // Refresh data
    } catch (error) {
      console.error('Error submitting rating:', error);
      toast({
        title: "Error",
        description: "Failed to submit rating. Please try again.",
        variant: "destructive",
      });
    }
  };

  return {
    currentRating,
    averageRating,
    totalRatings,
    hasRated,
    submitRating
  };
};