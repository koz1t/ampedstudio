import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
build: {
outDir: 'dist',
rollupOptions: {
input: {
main: path.resolve(__dirname, 'index.html')
},
output: [
{
entryFileNames: 'js/[name].js',
chunkFileNames: 'js/[name].js',
assetFileNames: ({ name }) => {
if (/\.(css)$/.test(name ?? '')) {
return 'css/[name].[ext]';
}
if (/\.(png|jpe?g|gif|svg)$/.test(name ?? '')) {
return 'images/[name].[ext]';
}
return '[name].[ext]';
}
},
{
entryFileNames: 'js/new-design.js',
chunkFileNames: 'js/new-design.js',
assetFileNames: ({ name }) => {
if (/\.(css)$/.test(name ?? '')) {
return 'css/new-design.[ext]';
}
if (/\.(png|jpe?g|gif|svg)$/.test(name ?? '')) {
return 'images/new-design.[ext]';
}
return 'new-design.[ext]';
}
}
]
}
}
});