import { ShareDto } from "@/types/ShareDto";
interface ShareStatsProps {
    shares: ShareDto[];
    type: 'received' | 'sent';
}
declare const ShareStats: ({ shares, type }: ShareStatsProps) => import("react/jsx-runtime").JSX.Element;
export default ShareStats;
