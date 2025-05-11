
// import { useAppSelector } from "@/hooks";
// import { Button } from "@/styles/ui/button";
// import { 
//   Bell, 
//   Moon,
//   Globe,
//   HardDrive,
//   Lock,
//   Mail,
//   Sliders,
//   Smartphone
// } from "lucide-react";

// const Settings=()=> {
//   const { user } = useAppSelector((state) => state.auth);

//   const settings = [
//     {
//       category: "Preferences",
//       icon: Sliders,
//       settings: [
//         {
//           title: "Dark Mode",
//           description: "Enable dark mode for better viewing in low light",
//           icon: Moon,
//           control: "switch",
//           value: false
//         },
//         {
//           title: "Language",
//           description: "Choose your preferred language",
//           icon: Globe,
//           control: "button",
//           value: "English"
//         }
//       ]
//     },
//     {
//       category: "Notifications",
//       icon: Bell,
//       settings: [
//         {
//           title: "Email Notifications",
//           description: "Receive email notifications for important updates",
//           icon: Mail,
//           control: "switch",
//           value: true
//         },
//         {
//           title: "Push Notifications",
//           description: "Receive push notifications on your devices",
//           icon: Smartphone,
//           control: "switch",
//           value: true
//         }
//       ]
//     },
//     {
//       category: "Storage",
//       icon: HardDrive,
//       settings: [
//         {
//           title: "Auto-Delete",
//           description: "Automatically delete files after 30 days",
//           icon: Lock,
//           control: "switch",
//           value: false
//         }
//       ]
//     }
//   ];

//   const handleSettingChange = (category:any, setting:any) => {
//     console.log(`Changed ${category} - ${setting.title}`);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-4xl">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
//         <p className="text-gray-600 mt-2">Customize your application preferences</p>
//       </div>

//       <div className="grid gap-8">
//         {settings.map((category) => (
//           <Card key={category.category}>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <category.icon className="w-5 h-5" />
//                 {category.category}
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-6">
//                 {category.settings.map((setting) => (
//                   <div key={setting.title} className="flex items-center justify-between">
//                     <div className="flex items-center gap-4">
//                       <div className="p-2 rounded-lg bg-gray-100">
//                         <setting.icon className="w-5 h-5 text-gray-600" />
//                       </div>
//                       <div>
//                         <h3 className="font-medium">{setting.title}</h3>
//                         <p className="text-sm text-gray-500">{setting.description}</p>
//                       </div>
//                     </div>
//                     {setting.control === 'switch' ? (
//                       <Switch
//                         checked={setting.value}
//                         onCheckedChange={() => handleSettingChange(category.category, setting)}
//                       />
//                     ) : (
//                       <Button variant="outline" onClick={() => handleSettingChange(category.category, setting)}>
//                         {setting.value}
//                       </Button>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }