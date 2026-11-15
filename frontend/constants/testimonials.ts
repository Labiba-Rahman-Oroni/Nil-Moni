export type Testimonial = {
       id: string;
       name: string;
       location?: string;
       text: string;
};

// ONLY add genuine reviews from real customers, with their permission.
// While this list is empty, the testimonials section stays hidden.
export const testimonials: Testimonial[] = [];