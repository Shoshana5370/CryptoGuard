import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/styles/ui/tabs";
import { fetchSharesWithMe, fetchSharesToOthers } from "@/features/shares/shareSlice";
import ReceivedShares from "./ReceivedShares";
import SentShares from "./SentShares";
import SharePreviewDialog from "./SharePreviewDialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/styles/ui/card";
import { Share2, Users, Send } from "lucide-react";

const Shares = () => {
  const dispatch = useAppDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedShareCode, setSelectedShareCode] = useState("");
  const [selectedShareName, setSelectedShareName] = useState("");
  const { user } = useAppSelector((state) => state.auth);
  const { sharesWithMe, sharesToOthers, status } = useAppSelector((state) => state.share);

  useEffect(() => {
    if (user && status.fetchWithMe === 'idle' && status.fetchToOthers === 'idle') {
      dispatch(fetchSharesWithMe());
      dispatch(fetchSharesToOthers());
    }
  }, [dispatch, user, status.fetchWithMe, status.fetchToOthers]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
              <Share2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                File Sharing Center
              </h1>
              <p className="text-gray-600 mt-1">
                Manage and access your shared files seamlessly
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Files Received</p>
                  <p className="text-2xl font-bold text-emerald-600">{sharesWithMe.length}</p>
                </div>
                <div className="p-3 rounded-xl bg-emerald-100">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Files Sent</p>
                  <p className="text-2xl font-bold text-orange-600">{sharesToOthers.length}</p>
                </div>
                <div className="p-3 rounded-xl bg-orange-100">
                  <Send className="w-5 h-5 text-orange-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-3">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-orange-500 h-1"></div>
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg bg-emerald-100">
                    <Share2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  Shared Files Management
                </CardTitle>
                <CardDescription className="text-gray-600">
                  View and manage files shared with you and files you've shared with others
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="received" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100 p-1 rounded-xl">
                    <TabsTrigger 
                      value="received" 
                      className="rounded-lg font-medium data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm transition-all"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Received Files
                    </TabsTrigger>
                    <TabsTrigger 
                      value="sent"
                      className="rounded-lg font-medium data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm transition-all"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Sent Files
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="received" className="mt-0">
                    <ReceivedShares
                      onSelect={(id, name) => {
                        setSelectedShareCode(id);
                        setSelectedShareName(name);
                        setDialogOpen(true);
                      }}
                    />
                  </TabsContent>
                  
                  <TabsContent value="sent" className="mt-0">
                    <SentShares />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <SharePreviewDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          shareCode={selectedShareCode}
          fileName={selectedShareName}
        />
      </div>
    </div>
  );
};

export default Shares;
