
import { Card, CardContent } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { ScrollArea } from "../components/ui/scroll-area";
import { useState } from "react";

const sections = [
  {
    title: "Math Foundations",
    items: [
      { label: "Linear Algebra (MIT OCW - Strang)", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/" },
      { label: "Calculus (MIT OCW - Calculus I/II)", url: "https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/" },
      { label: "Probability & Stats (Khan Academy)", url: "https://www.khanacademy.org/math/statistics-probability" },
      { label: "Optimization (Stanford Convex Optimization)", url: "https://web.stanford.edu/~boyd/cvxbook/" },
      { label: "Information Theory (YouTube Series)", url: "https://www.youtube.com/playlist?list=PLTPQEx-31JXj6ApC93a6H1b4J9nKFVQ1v" },
    ],
  },
  {
    title: "Programming + Tools",
    items: [
      { label: "Learn Python (Automate the Boring Stuff)", url: "https://automatetheboringstuff.com/" },
      { label: "NumPy (Official Tutorial)", url: "https://numpy.org/learn/" },
      { label: "Pandas (10-Minute Guide)", url: "https://pandas.pydata.org/docs/user_guide/10min.html" },
      { label: "PyTorch (Official Tutorials)", url: "https://pytorch.org/tutorials/" },
      { label: "Git Basics", url: "https://www.atlassian.com/git/tutorials" },
      { label: "Linux Shell Crash Course", url: "https://linuxjourney.com/" },
    ],
  },
  {
    title: "Classical Machine Learning",
    items: [
      { label: "Andrew Ng’s ML Course (Coursera)", url: "https://www.coursera.org/learn/machine-learning" },
      { label: "Introduction to Statistical Learning", url: "https://www.statlearning.com/" },
      { label: "Pattern Recognition and ML (Bishop)", url: "https://www.amazon.com/Pattern-Recognition-Learning-Information-Statistics/dp/0387310738" },
      { label: "Hands-On ML with Scikit-Learn & TensorFlow", url: "https://github.com/ageron/handson-ml3" },
    ],
  },
  {
    title: "Deep Learning",
    items: [
      { label: "DeepLearning.ai Specialization", url: "https://www.coursera.org/specializations/deep-learning" },
      { label: "Deep Learning Book (Goodfellow)", url: "https://www.deeplearningbook.org/" },
      { label: "Neural Nets & Deep Learning (Michael Nielsen)", url: "http://neuralnetworksanddeeplearning.com/" },
      { label: "Stanford CS231n", url: "http://cs231n.stanford.edu/" },
      { label: "Fast.ai Course", url: "https://course.fast.ai/" },
    ],
  },
  {
    title: "NLP + Transformers",
    items: [
      { label: "Stanford CS224n", url: "http://web.stanford.edu/class/cs224n/" },
      { label: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762" },
      { label: "Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/" },
      { label: "Hugging Face Transformers Course", url: "https://huggingface.co/learn/nlp-course/" },
      { label: "OpenAI Research Page", url: "https://openai.com/research" },
    ],
  },
  {
    title: "Reinforcement Learning",
    items: [
      { label: "RL Book (Sutton & Barto)", url: "http://incompleteideas.net/book/the-book-2nd.html" },
      { label: "David Silver’s RL Course", url: "https://www.youtube.com/playlist?list=PLqYmG7hTraZBiG_XpjnPrSNw-1XQaM_gB" },
      { label: "Spinning Up in RL (OpenAI)", url: "https://spinningup.openai.com/en/latest/" },
      { label: "Berkeley Deep RL (CS285)", url: "http://rail.eecs.berkeley.edu/deeprlcourse/" },
      { label: "AlphaGo Nature Paper", url: "https://www.nature.com/articles/nature24270" },
    ],
  },
  {
    title: "Scaling + AGI",
    items: [
      { label: "Scaling Laws Paper (Kaplan et al.)", url: "https://arxiv.org/abs/2001.08361" },
      { label: "Chinchilla Paper", url: "https://arxiv.org/abs/2203.15556" },
      { label: "The Bitter Lesson", url: "http://www.incompleteideas.net/IncIdeas/BitterLesson.html" },
      { label: "GPT-4 Technical Report", url: "https://openai.com/research/gpt-4" },
      { label: "Reward is Enough", url: "https://www.deepmind.com/publications/reward-is-enough" },
    ],
  },
  {
    title: "AI Safety + Alignment",
    items: [
      { label: "Concrete Problems in AI Safety", url: "https://arxiv.org/abs/1606.06565" },
      { label: "InstructGPT Paper", url: "https://arxiv.org/abs/2203.02155" },
      { label: "AI Safety Fundamentals Curriculum", url: "https://aisafetyfundamentals.com/" },
      { label: "Superintelligence (Bostrom)", url: "https://www.amazon.com/Superintelligence-Dangers-Strategies-Nick-Bostrom/dp/0198739834" },
      { label: "Human Compatible (Russell)", url: "https://www.amazon.com/Human-Compatible-Artificial-Intelligence-Problem/dp/0525558616" },
    ],
  },
  {
    title: "Research + Career",
    items: [
      { label: "Read arXiv Daily", url: "https://arxiv-sanity-lite.com/" },
      { label: "Join a ML Discord or reading group", url: "https://discord.com/invite/ml" },
      { label: "Reproduce 2+ papers from scratch", url: "https://paperswithcode.com/" },
      { label: "Write a technical blog/survey", url: "https://medium.com/tag/artificial-intelligence" },
      { label: "Submit to NeurIPS / ICLR / ICML", url: "https://neurips.cc/" },
      { label: "Apply to OpenAI Residency", url: "https://openai.com/careers/residency" },
    ],
  },
];

export default function TodoPage() {
  const [checked, setChecked] = useState({});

  const toggle = (label) => {
    setChecked((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <ScrollArea className="p-4 h-screen w-full">
      <h1 className="text-3xl font-bold mb-6">AGI Researcher Roadmap</h1>
      {sections.map((section) => (
        <Card key={section.title} className="mb-6">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.label} className="flex items-center space-x-3">
                  <Checkbox
                    checked={checked[item.label] || false}
                    onCheckedChange={() => toggle(item.label)}
                  />
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </ScrollArea>
  );
}
