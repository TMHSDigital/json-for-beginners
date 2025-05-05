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
            
            // Create copy button
            const copyBtn = document.createElement('button');
            copyBtn.textContent = 'Copy';
            copyBtn.className = 'button secondary copy-button';
            copyBtn.onclick = () => {
                navigator.clipboard.writeText(formatted);
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                }, 2000);
            };
            
            block.parentElement.style.position = 'relative';
            block.parentElement.appendChild(copyBtn);
        } catch (e) {
            console.error('Invalid JSON:', e);
        }
    });
}); 