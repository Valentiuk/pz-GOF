class SubsystemVideo { process() { return "Video ready"; } }
class SubsystemAudio { process() { return "Audio ready"; } }

export class VideoConverterFacade {
    public convert(file: string): void {
        const v = new SubsystemVideo();
        const a = new SubsystemAudio();
        console.log(`[Facade] Конвертація ${file}: ${v.process()}, ${a.process()}`);
    }
}