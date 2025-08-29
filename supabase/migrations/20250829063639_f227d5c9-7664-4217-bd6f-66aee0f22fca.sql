-- Create tables for website ratings and visitor tracking

-- Table for storing website ratings
CREATE TABLE public.website_ratings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_ip TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(visitor_ip)
);

-- Table for storing visitor count
CREATE TABLE public.visitor_stats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  total_visitors INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert initial visitor stats record
INSERT INTO public.visitor_stats (total_visitors) VALUES (0);

-- Table for tracking unique visitors
CREATE TABLE public.unique_visitors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_ip TEXT NOT NULL UNIQUE,
  first_visit TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.website_ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.visitor_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.unique_visitors ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (no authentication required)
CREATE POLICY "Anyone can view ratings" ON public.website_ratings FOR SELECT USING (true);
CREATE POLICY "Anyone can insert ratings" ON public.website_ratings FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update their own rating" ON public.website_ratings FOR UPDATE USING (true);

CREATE POLICY "Anyone can view visitor stats" ON public.visitor_stats FOR SELECT USING (true);
CREATE POLICY "Anyone can update visitor stats" ON public.visitor_stats FOR UPDATE USING (true);

CREATE POLICY "Anyone can view unique visitors" ON public.unique_visitors FOR SELECT USING (true);
CREATE POLICY "Anyone can insert unique visitors" ON public.unique_visitors FOR INSERT WITH CHECK (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_website_ratings_updated_at
  BEFORE UPDATE ON public.website_ratings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_visitor_stats_updated_at
  BEFORE UPDATE ON public.visitor_stats
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();