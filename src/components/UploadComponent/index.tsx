import React from 'react';
import JSZip from 'jszip';

function UploadComponent() {

    const fetchFile = async (filePath: RequestInfo | URL) => {
        const response = await fetch(filePath);
        return response.blob();
    };

    const zipFilesAndUpload = async () => {
        const zip = new JSZip();

        // Adicione os caminhos relativos dos seus arquivos da pasta build
        const buildFiles = [
            'static/js/main.chunk.js',
            'static/css/main.c8d51e2d.css',
            'static/css/main.main.c8d51e2d.css.map',
            // ... (todos os outros arquivos e subdiretórios)
        ];

        // Carregue cada arquivo e adicione-o ao zip
        for (const file of buildFiles) {
            const blob = await fetchFile(`/build/${file}`);
            zip.file(file, blob);
        }

        // Gerar o zip como Blob para upload
        const content = await zip.generateAsync({ type: "blob" });

        const formData = new FormData();
        formData.append('files', content, "build.zip");

        try {
            const response = await fetch('http://localhost:3001/upload', {
                method: 'POST',
                body: formData,
            });

            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error('Erro ao fazer upload:', error);
        }
    };

    return (
        <div>
            <button onClick={zipFilesAndUpload}>Enviar Aplicação</button>
        </div>
    );
}

export default UploadComponent;
