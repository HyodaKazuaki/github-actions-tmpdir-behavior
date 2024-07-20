import esbuild from "esbuild";

esbuild
	.build({
		entryPoints: ["src/app.ts"],
		bundle: true,
		minify: process.env.NODE_ENV === "production",
		target: "es2022",
		platform: "node",
		outdir: "./dist",
		tsconfig: "./tsconfig.json",
	})
	.catch((err) => {
		process.stderr.write(err.stderr);
		process.exit(1);
	});
