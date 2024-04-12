import { create } from "zustand";
export interface ModalState {
	isOpen: boolean;
	target:
		| "common"
		| "mbos"
		| "taskie"
		| "gps"
		| "website"
		| "e-com"
		| "crm"
		| "bot";
}

interface ModalActions {
	openModal: (target: ModalState["target"]) => void;
	closeModal: () => void;
	getLink: (type: Link["type"]) => Link | undefined;
}
interface Link {
	type: ModalState["target"];
	link: string;
}
const links: Link[] = [
	{
		type: "common",
		link: "https://lead.mbos.uz?application=SITE&uid=7eab4c2f-cb9b-44ba-8651-6432f0abe4a9&target_id=3",
	},
	{
		type: "mbos",
		link: "https://lead.mbos.uz?application=SITE&uid=9c8899dc-71f6-4478-b25b-321ac9806c80&target_id=3",
	},
	{
		type: "taskie",
		link: "https://lead.mbos.uz?application=SITE&uid=23d58c4c-e968-4f43-8f66-0bf6cffe3275&target_id=3",
	},
	{
		type: "gps",
		link: "https://lead.mbos.uz?application=SITE&uid=793d8b42-8eae-4ed4-b920-06f4512d606b&target_id=3",
	},
	{
		type: "website",
		link: "https://lead.mbos.uz?application=SITE&uid=ffd96377-18e7-4982-b5db-d63e468cd1e7&target_id=3",
	},
	{
		type: "e-com",
		link: "https://lead.mbos.uz?application=SITE&uid=9a44fe21-b7b7-4efc-9a6f-59b29ef8396e&target_id=3",
	},
	{
		type: "bot",
		link: "https://lead.mbos.uz?application=SITE&uid=4c1e11d1-14d2-4ad3-aa95-d623764b8546&target_id=3",
	},
	{
		type: "crm",
		link: "https://lead.mbos.uz?application=SITE&uid=f7a07a40-cf55-4434-8ad9-add5c4b8a2e7&target_id=3",
	},
];
type ModalStore = ModalState & ModalActions;
const useModalStore = create<ModalStore>()((set) => ({
	isOpen: false,
	target: "common",
	openModal: (target) => set({ isOpen: true, target }),
	closeModal: () => set({ isOpen: false, target: "common" }),
	getLink(type) {
		return links.find((l) => l.type === type);
	},
}));

export default useModalStore;

