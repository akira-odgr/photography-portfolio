type BlogPost = {
    id: number;
    date: string;
    title: string;
    desc: string;
    delay: number;
};

export const blogData: BlogPost[] = [
    {
        id: 1,
        date: "3.10.2024",
        title: "Tips for Capturing Stunning Portraits",
        desc: "Discover simple yet powerful techniques to enhance your portrait photography mastering lighting to connecting with your subject for authentic shots.",
        delay: 0,
    },
    {
        id: 2,
        date: "10.01.2024",
        title: "The Art of Visual Storytelling in Filmmaking",
        desc: "Explore how to craft compelling narratives through cinematography, sound design, and editing that leave a lasting impact on your audience.",
        delay: 0.5,
    },
    {
        id: 3,
        date: "15.04.2024",
        title: "Essential Gear Every Photographer Needs",
        desc: "A comprehensive guide to must-have equipment, from cameras to lenses and accessories, for both beginners and seasoned photographers.",
        delay: 1,
    },
    {
        id: 4,
        date: "25.06.2024",
        title: "Create Cinematic Videos with Minimal Gear",
        desc: "Practical advice for achieving the professional-quality videos without breaking your bank, perfect for new and aspiring filmmakers on a budget.",
        delay: 1.5,
    },
];
