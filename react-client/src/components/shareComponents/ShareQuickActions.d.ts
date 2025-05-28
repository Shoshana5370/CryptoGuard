import { ShareDto } from "@/types/ShareDto";
interface ShareQuickActionsProps {
    share: ShareDto;
    shareType: 'received' | 'sent';
    onPreview?: (e?: React.MouseEvent) => void;
    onDownload?: (e?: React.MouseEvent) => void;
    onExtend?: () => void;
    onCopyLink?: () => void;
}
declare const ShareQuickActions: ({ share, shareType, onPreview, onDownload, onExtend, onCopyLink }: ShareQuickActionsProps) => import("react/jsx-runtime").JSX.Element;
export default ShareQuickActions;
