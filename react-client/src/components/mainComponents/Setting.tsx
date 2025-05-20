
// import { useAppSelector } from "@/hooks";
// import { Button } from "@/styles/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/styles/ui/card";
// import { Switch } from "@radix-ui/react-switch";
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
//                         // checked={setting.value}
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
// export default Settings;
import { useEffect, useState } from "react";
import { Button } from "@/styles/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/styles/ui/card";
import { Switch } from "@radix-ui/react-switch";
import {
  Bell, Moon, Globe, HardDrive, Lock,
  Mail, Sliders, Smartphone
} from "lucide-react";

type SettingItem = {
  title: string;
  description: string;
  icon: React.ElementType;
  control: "switch" | "button";
  value: boolean | string;
};

type SettingCategory = {
  category: string;
  icon: React.ElementType;
  settings: SettingItem[];
};

const Settings = () => {
  const [settings, setSettings] = useState<SettingCategory[]>([
    {
      category: "Preferences",
      icon: Sliders,
      settings: [
        {
          title: "Dark Mode",
          description: "Enable dark mode for better viewing in low light",
          icon: Moon,
          control: "switch",
          value: false,
        },
        {
          title: "Language",
          description: "Choose your preferred language",
          icon: Globe,
          control: "button",
          value: "English",
        },
      ],
    },
    {
      category: "Notifications",
      icon: Bell,
      settings: [
        {
          title: "Email Notifications",
          description: "Receive email notifications for important updates",
          icon: Mail,
          control: "switch",
          value: true,
        },
        {
          title: "Push Notifications",
          description: "Receive push notifications on your devices",
          icon: Smartphone,
          control: "switch",
          value: true,
        },
      ],
    },
    {
      category: "Storage",
      icon: HardDrive,
      settings: [
        {
          title: "Auto-Delete",
          description: "Automatically delete files after 30 days",
          icon: Lock,
          control: "switch",
          value: false,
        },
      ],
    },
  ]);

  useEffect(() => {
    const darkModeSetting = settings[0].settings.find(s => s.title === "Dark Mode");
    if (darkModeSetting?.value === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settings]);

  const handleSettingChange = (categoryName: string, settingItem: SettingItem) => {
    setSettings(prev =>
      prev.map(category =>
        category.category === categoryName
          ? {
              ...category,
              settings: category.settings.map(item =>
                item.title === settingItem.title
                  ? {
                      ...item,
                      value:
                        item.control === "switch"
                          ? !(item.value as boolean)
                          : item.value === "English"
                          ? "Hebrew"
                          : "English",
                    }
                  : item
              ),
            }
          : category
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Customize your application preferences
        </p>
      </div>

      <div className="grid gap-8">
        {settings.map((category) => (
          <Card key={category.category} className="dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-white">
                <category.icon className="w-5 h-5" />
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {category.settings.map((setting) => (
                  <div
                    key={setting.title}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                        <setting.icon className="w-5 h-5 text-gray-600 dark:text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-white">
                          {setting.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {setting.description}
                        </p>
                      </div>
                    </div>
                    {setting.control === "switch" ? (
                      <Switch
                        checked={typeof setting.value === "boolean" ? setting.value : false}
                        onCheckedChange={() => handleSettingChange(category.category, setting)}
                        className="w-11 h-6 bg-gray-300 rounded-full relative focus:outline-none"
                      >
                        <span
                          className={`block w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                            setting.value ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </Switch>
                    ) : (
                      <Button
                        variant="outline"
                        onClick={() => handleSettingChange(category.category, setting)}
                      >
                        {setting.value}
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Settings;
