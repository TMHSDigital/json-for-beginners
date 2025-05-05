// Syntax highlighting for JSON examples
document.addEventListener('DOMContentLoaded', () => {
    // Find all pre elements with JSON content
    const jsonBlocks = document.querySelectorAll('pre code');
    
    jsonBlocks.forEach(block => {
        try {
            // Parse and re-stringify to ensure valid JSON
            const json = JSON.parse(block.textContent);
            const formatted = JSON.stringify(json, null, 2);
            
            // Apply syntax highlighting
            block.textContent = formatted;
            block.classList.add('json');
            
            // Add copy button
            const copyButton = document.createElement('button');
            copyButton.textContent = 'Copy';
            copyButton.className = 'copy-button';
            copyButton.onclick = () => {
                navigator.clipboard.writeText(formatted);
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 2000);
            };
            
            block.parentElement.style.position = 'relative';
            block.parentElement.appendChild(copyButton);
        } catch (e) {
            console.error('Invalid JSON:', e);
        }
    });
}); 