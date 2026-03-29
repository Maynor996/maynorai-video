import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Img, staticFile, Sequence } from 'remotion';

export type SceneFeaturesProps = {
  features: string[];
};

export const SceneFeatures: React.FC<SceneFeaturesProps> = ({ features }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  
  const titleOpacity = interpolate(frame, [0, 15], [0, 1]);
  
  return (
    <AbsoluteFill style={{
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#f1f4f8',
      paddingTop: '120px'
    }}>
      <h2 style={{
        fontSize: '64px',
        fontWeight: '800',
        color: '#2d3748',
        marginBottom: '60px',
        opacity: titleOpacity
      }}>
        支持全网主流 AI 官方直达
      </h2>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '40px',
        width: '100%',
        padding: '0 80px'
      }}>
        {features.map((feature, index) => {
          const featureSpring = spring({
            frame: frame - (30 + index * 10),
            fps,
            config: { damping: 10, stiffness: 100 },
          });
          
          const translateY = interpolate(featureSpring, [0, 1], [40, 0]);
          
          return (
            <div key={feature} style={{
              width: '400px',
              backgroundColor: 'white',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
              border: '2px solid #e2e8f0',
              textAlign: 'center',
              transform: `translateY(${translateY}px)`,
              opacity: featureSpring
            }}>
              <span style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#6b46c1'
              }}>
                {feature}
              </span>
            </div>
          );
        })}
      </div>
      
      <div style={{
        marginTop: '100px',
        opacity: interpolate(frame, [60, 90], [0, 1])
      }}>
        <Img 
          src={staticFile('final_service_list.png')} 
          style={{ width: '900px', borderRadius: '24px', border: '1px solid #ddd', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} 
        />
      </div>
    </AbsoluteFill>
  );
};
