const inputEl: HTMLInputElement = document.querySelector('.src-input');
inputEl.value = 'https://d47e8590c178.us-east-1.playback.live-video.net/api/video/v1/us-east-1.219872691537.channel.R9gIRmoB1agg.m3u8';

export function setupForm(playCallback: (string) => void) {
    // Set the stream to load using the `playbackUrl=` query param
    const params = new URLSearchParams(window.location.search);
    const streamParam = params.get('playbackUrl');
    if (streamParam) {
        inputEl.value = streamParam;
    }

    const formEl = document.querySelector('.src-container-direct');
    formEl.addEventListener('submit', (event) => {
        event.preventDefault();
        playCallback(inputEl.value);
    })
}

export function getFormStream(): string | undefined {
    return inputEl.value;
}
