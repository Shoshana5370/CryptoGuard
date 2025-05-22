import { ShareDto } from "@/types/ShareDto";
interface Props {
    share: ShareDto;
    onSelect: (shareId: string, fileName: string) => void;
}
declare const ReceivedShareItem: React.FC<Props>;
export default ReceivedShareItem;
