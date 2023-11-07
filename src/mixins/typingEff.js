export default {
    methods: {
        startTyping() {
            this.isLoading=false
            if (this.currentTextIndex < this.originalTexts.length) {
                const originalText = this.originalTexts[this.currentTextIndex];
                const typingInterval = setInterval(() => {
                    if (this.currentPosition < originalText.length) {
                        this.typedText += originalText[this.currentPosition];
                        this.currentPosition++;
                    } else {
                        clearInterval(typingInterval);
                        // Move on to the next text
                        this.currentTextIndex++;
                        this.currentPosition = 0;
                        this.startTyping();
                    }
                }, 30);
            }
        },
    },
}