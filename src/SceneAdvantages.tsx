import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Img, staticFile } from 'remotion';

export type SceneAdvantagesProps = {
  advantages: string[];
};

export const SceneAdvantages: React.FC<SceneAdvantagesProps> = ({ advantages }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  
  const titleOpacity = interpolate(frame, [0, 15], [0, 1]);
  
  return (
    <AbsoluteFill style={{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f7fafc',
      padding: '80px'
    }}>
      <h2 style={{
        fontSize: '72px',
        fontWeight: '900',
        color: '#2d3748',
        marginBottom: '100px',
        opacity: titleOpacity
      }}>
        稳定、高效、更省心
      </h2>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
        width: '100%',
        maxWidth: '1200px'
      }}>
        {advantages.map((advantage, index) => {
          const advantageSpring = spring({
            frame: frame - (45 + index * 15),
            fps,
            config: { damping: 10, stiffness: 100 },
          });
          
          const translateX = interpolate(advantageSpring, [0, 1], [-100, 0]);
          
          return (
            <div key={advantage} style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: '32px',
              padding: '60px 80px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
              border: '4px solid #f1f4f8',
              transform: `translateX(${translateX}px)`,
              opacity: advantageSpring
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: '#6b46c1',
                marginRight: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '60px',
                fontWeight: '900'
              }}>
                ✓
              </div>
              <span style={{
                fontSize: '64px',
                fontWeight: '700',
                color: '#4a5568'
              }}>
                {advantage}
              </span>
            </div>
          );
        })}
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '80px',
        right: '80px',
        opacity: interpolate(frame, [150, 180], [0, 1])
      }}>
        <Img 
          src={staticFile('feishu_doc.png')} 
          style={{ width: '600px', borderRadius: '16px', border: '1px solid #ddd', transform: 'rotate(-5deg)' }} 
        />
      </div>
    </AbsoluteFill>
  );
};
