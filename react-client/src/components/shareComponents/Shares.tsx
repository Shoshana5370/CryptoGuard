
// export default function SharedWithMe() {
//   const { user } = useAppSelector(state => state.auth);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">Shared Files</h1>
//           <p className="text-gray-500 mt-1">Access files that have been shared with you</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           <Card className="shadow-md border border-gray-200">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Share2 className="w-5 h-5 text-emerald-600" />
//                 Shared Files History
//               </CardTitle>
//               <CardDescription>
//                 Files that have been shared with you will appear here
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Tabs defaultValue="received">
//                 <TabsList className="mb-4">
//                   <TabsTrigger value="received">Received</TabsTrigger>
//                   <TabsTrigger value="sent">Sent</TabsTrigger>
//                 </TabsList>

//                 <TabsContent value="received">
//                   <div className="text-center py-8 text-gray-500">
//                     <Link2 className="h-12 w-12 mx-auto text-gray-300 mb-3" />
//                     <p>No files have been shared with you yet</p>
//                     <p className="text-sm mt-1">
//                       When someone shares a file with you, it will appear here
//                     </p>
//                   </div>
//                 </TabsContent>

//                 <TabsContent value="sent">
//                   <div className="text-center py-8 text-gray-500">
//                     <Link2 className="h-12 w-12 mx-auto text-gray-300 mb-3" />
//                     <p>You haven't shared any files yet</p>
//                     <p className="text-sm mt-1">
//                       Files you share with others will appear here
//                     </p>
//                   </div>
//                 </TabsContent>
//               </Tabs>
//             </CardContent>
//           </Card>
//         </div>

//         <div>
//           <AccessSharedFile />

//           <Card className="mt-6 bg-gray-50 border border-gray-200">
//             <CardHeader>
//               <CardTitle className="text-lg">About Share Codes</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4 text-sm text-gray-600">
//                 <p>
//                   {/* <Lock className="h-4 w-4 inline mr-1 text-emerald-600" />
//                   Share codes are secure one-time access tokens
//                 </p>
//                 <p>
//                   <Lock className="h-4 w-4 inline mr-1 text-emerald-600" />
//                   Files shared with you are encrypted
//                 </p>
//                 <p>
//                   <Lock className="h-4 w-4 inline mr-1 text-emerald-600" />
//                   Access links expire after download or time limit */}
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/styles/ui/tabs";
import { Link2, Share2 } from "lucide-react";
import AccessSharedFile from "./AccessSharedFile";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/styles/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/styles/ui/card";
import {
  fetchSharesWithMe,
  fetchSharesToOthers,
  extendShareExpiration,
} from "../../features/shares/shareSlice";
import { Button } from "@/styles/ui/button";

export default function Shares() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { sharesWithMe, sharesToOthers, loading } = useAppSelector(
    (state) => state.share
  );
  const [selectedShareCode, setSelectedShareCode] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  useEffect(() => {
    if (user) {
      dispatch(fetchSharesWithMe());
      dispatch(fetchSharesToOthers());
    }
  }, [dispatch, user]);

  function handleExtendExpiration(date: string): void {
    // await axiosInstance.post(`/api/User/ExtendShareExpiration/${id}`);
    dispatch(extendShareExpiration(date)); // refresh list
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Shared Files</h1>
          <p className="text-gray-500 mt-1">
            Access files that have been shared with you
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="shadow-md border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-emerald-600" />
                Shared Files History
              </CardTitle>
              <CardDescription>
                Files that have been shared with you will appear here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="received">
                <TabsList className="mb-4">
                  <TabsTrigger value="received">Received</TabsTrigger>
                  <TabsTrigger value="sent">Sent</TabsTrigger>
                </TabsList>

                <TabsContent value="received">
                  {loading ? (
                    <p className="text-center text-gray-400 py-8">Loading...</p>
                  ) : sharesWithMe.length > 0 ? (
                    <ul className="space-y-3">
                      {sharesWithMe.map((share) => (
                        <li
                          key={share.id}
                          onClick={() => {
                            setSelectedShareCode(share.id.toString());
                            setDialogOpen(true);
                          }}
                          className="border p-3 rounded bg-white shadow-sm cursor-pointer hover:bg-gray-50"
                        >
                          Shared by user #{share.sharedByUserId} – file key: <strong>{share.fileKey}</strong>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Link2 className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                      <p>No files have been shared with you yet</p>
                      <p className="text-sm mt-1">
                        When someone shares a file with you, it will appear here
                      </p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="sent">
                  {loading ? (
                    <p className="text-center text-gray-400 py-8">Loading...</p>
                  ) : sharesToOthers.length > 0 ? (
                    <ul className="space-y-3">
                      {sharesToOthers.map((share) => (
                        <li
                          key={share.id}
                          className="border p-3 rounded bg-white shadow-sm relative flex justify-between items-start"
                        >
                          <div>
                            Shared to <strong>{share.recipientEmail || "Unregistered User"}</strong> – file key:{" "}
                            <strong>{share.fileKey}</strong>
                            {share.used && (
                              <span className="mt-1 inline-block text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                                Used
                              </span>
                            )}
                          </div>

                          {!share.used && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="ml-4 mt-1 flex items-center gap-1 text-sm"
                              onClick={() => handleExtendExpiration(share.expiresAt)}
                            >
                              <Clock className="w-4 h-4" />
                              Extend
                            </Button>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Link2 className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                      <p>You haven't shared any files yet</p>
                      <p className="text-sm mt-1">
                        Files you share with others will appear here
                      </p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle>Access Shared File</DialogTitle>
            </DialogHeader>
            {selectedShareCode && (
              <AccessSharedFile
                code={selectedShareCode}
                onReset={() => {
                  setDialogOpen(false);
                  setSelectedShareCode(null);
                }}
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
