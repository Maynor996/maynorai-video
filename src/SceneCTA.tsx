import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Img, staticFile } from 'remotion';

export const SceneCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  
  const titleSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 10, stiffness: 100 },
  });
  
  const buttonSpring = spring({
    frame: frame - 60,
    fps,
    config: { damping: 12, stiffness: 80 },
  });
  
  const buttonScale = interpolate(buttonSpring, [0, 1], [0.8, 1]);
  const titleTranslate = interpolate(titleSpring, [0, 1], [100, 0]);
  
  return (
    <AbsoluteFill style={{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#6b46c1',
      padding: '80px',
      color: 'white'
    }}>
      <div style={{
        textAlign: 'center',
        transform: `translateY(${titleTranslate}px)`,
        opacity: titleSpring
      }}>
        <h1 style={{
          fontSize: '100px',
          fontWeight: '900',
          marginBottom: '60px',
          lineHeight: '1.2'
        }}>
          立即体验 <br /> 智能新高度
        </h1>
        
        <p style={{
          fontSize: '64px',
          fontWeight: '500',
          marginBottom: '120px',
          opacity: interpolate(frame, [30, 60], [0, 1])
        }}>
          低至 4.99 RMB/天 <br /> 官网 1:1 无缝衔接
        </p>
        
        <div style={{
          backgroundColor: 'white',
          color: '#6b46c1',
          padding: '60px 120px',
          borderRadius: '100px',
          fontSize: '72px',
          fontWeight: '900',
          boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
          transform: `scale(${buttonScale})`,
          opacity: buttonSpring,
          display: 'inline-block'
        }}>
          chatgpt-plus.top
        </div>
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '100px',
        fontSize: '48px',
        fontWeight: '500',
        opacity: interpolate(frame, [120, 150], [0, 1])
      }}>
        全网已有 2,000+ 付费用户信任选择
      </div>
    </AbsoluteFill>
  );
};
