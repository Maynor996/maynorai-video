import { Composition } from 'remotion';
import { Main } from './Main';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Main"
        component={Main}
        durationInFrames={900} // 30 seconds
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "MaynorAI - 全网最稳定 AI 代理",
          subTitle: "已有 2k+ 付费用户信任",
          features: [
            "GPT-4o/5 Pro",
            "Claude 3.5 Sonnet",
            "Gemini 2.5 Pro",
            "SuperGrok",
            "Deepseek R1"
          ],
          advantages: [
            "免梯直登",
            "官方 1:1 体验",
            "不降智 Plus 节点",
            "对话隔离 & 隐私保护"
          ]
        }}
      />
    </>
  );
};
