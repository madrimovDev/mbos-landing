import { Data } from "./types";
import uz from "./uz";
import ru from "./ru";
import en from "./en";

export const t = (lang: "en" | "ru" | "uz"): Data => {
	return lang === "uz" ? uz : lang === "ru" ? ru : en;
};
