export interface ContactOption {
    title: string;
    icon: string;      
    lines: string[];   
    note?: string;     }
  
  export const contactOptions: ContactOption[] = [
    {
      title: "Message Us",
      icon: "/message.png",
      lines: [
        "",  // add whatsapp link here later
        "+91 91655 45678",                      // add whatsapp number here
      ],
      note: "We’ll respond within 24 hours",
    },
    {
      title: "Email Us",
      icon: "/email.png",
      lines: [
        "info@anshled.com",
        "sales@anshled.com",
      ],
      note: "We’ll respond within 24 hours",
    },
    {
      title: "Call Us",
      icon: "/call.png",
      lines: [
        "+91 91655 45678",
        "+91 77164 61066",
      ],
      note: "Mon–Sat, 9:00 AM–7:00 PM",
    },
  ];
  
  export const officeAddress = [
    "Ansh Resources Pvt. Ltd.",
    "G-10,Anupam Nagar, Industrial Area",
    "Raipur, Chhattisgarh 492001",
    "India",
  ];
  