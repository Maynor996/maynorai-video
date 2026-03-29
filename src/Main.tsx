import { AbsoluteFill, Sequence, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { SceneIntro } from './SceneIntro';
import { SceneFeatures } from './SceneFeatures';
import { SceneAdvantages } from './SceneAdvantages';
import { SceneCTA } from './SceneCTA';

export type MainProps = {
  title: string;
  subTitle: string;
  features: string[];
  advantages: string[];
};

export const Main: React.FC<MainProps> = ({ title, subTitle, features, advantages }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  
  // Scene durations (in frames)
  const transitionFrames = 30; // 1s
  const introDuration = 120; // 4s
  const featuresDuration = 240; // 8s
  const advantagesDuration = 240; // 8s
  const ctaDuration = 300; // 10s
  
  // Scene Start Times
  const introStart = 0;
  const featuresStart = introStart + introDuration;
  const advantagesStart = featuresStart + featuresDuration;
  const ctaStart = advantagesStart + advantagesDuration;

  const getOpacity = (start: number, duration: number) => {
    return interpolate(
      frame,
      [start, start + transitionFrames, start + duration - transitionFrames, start + duration],
      [0, 1, 1, 0],
      { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
    );
  };

  return (
    <AbsoluteFill style={{ backgroundColor: 'white' }}>
      <Sequence from={introStart} durationInFrames={introDuration}>
        <div style={{ opacity: getOpacity(introStart, introDuration), width: '100%', height: '100%' }}>
          <SceneIntro title={title} subTitle={subTitle} />
        </div>
      </Sequence>
      
      <Sequence from={featuresStart} durationInFrames={featuresDuration}>
        <div style={{ opacity: getOpacity(featuresStart, featuresDuration), width: '100%', height: '100%' }}>
          <SceneFeatures features={features} />
        </div>
      </Sequence>
      
      <Sequence from={advantagesStart} durationInFrames={advantagesDuration}>
        <div style={{ opacity: getOpacity(advantagesStart, advantagesDuration), width: '100%', height: '100%' }}>
          <SceneAdvantages advantages={advantages} />
        </div>
      </Sequence>
      
      <Sequence from={ctaStart} durationInFrames={ctaDuration}>
        <div style={{ opacity: interpolate(frame, [ctaStart, ctaStart + transitionFrames], [0, 1], { extrapolateLeft: 'clamp' }), width: '100%', height: '100%' }}>
          <SceneCTA />
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
