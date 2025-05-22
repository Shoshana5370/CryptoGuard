

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/styles/ui/tabs";
import { fetchSharesWithMe, fetchSharesToOthers } from "@/features/shares/shareSlice";
import ReceivedShares from "./ReceivedShares";
import SentShares from "./SentShares";
import SharePreviewDialog from "./SharePreviewDialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/styles/ui/card";
import { Share2 } from "lucide-react";

const Shares = () => {
  const dispatch = useAppDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedShareCode, setSelectedShareCode] = useState("");
  const [selectedShareName, setSelectedShareName] = useState("");
  const { user } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (user) {
      dispatch(fetchSharesWithMe());
      dispatch(fetchSharesToOthers());
    }
  }, [dispatch, user]);

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
                  <ReceivedShares
                    onSelect={(id, name) => {
                      setSelectedShareCode(id);
                      setSelectedShareName(name);
                      setDialogOpen(true);
                    }}
                  />
                </TabsContent>
                <TabsContent value="sent">
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
  );
};
export default Shares;
