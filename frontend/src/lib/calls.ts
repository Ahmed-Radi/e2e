"use server";

import { parseStringify } from "./utils";

export const getProducts = async (): Promise<any> => {
	try {
		const res = await fetch("http://localhost:8000/items");
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}
		const resJson = await res.json();
		return parseStringify(resJson);
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
};
