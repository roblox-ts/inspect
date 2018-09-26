interface InspectOptions {
	depth?: number;
	newline?: string;
	indent?: string;
	process?: (item: any, path: Array<string>) => string | undefined;
}

export default function inspect(value: any, options?: InspectOptions): string;
