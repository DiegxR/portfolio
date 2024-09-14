
import Control from "@/components/ThreeJs/Control";
import Objects from "@/components/ThreeJs/Objects";
import ThreeScene from "@/components/ThreeJs/ThreeScene";
import IntroPage from "@/components/Layout/IntroPage";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <IntroPage/>
      
      <ThreeScene>
        <color attach="background" args={["#161c24"]} />
        <Objects color="#00ff00" position={[-1, 0, 0]} />
        <ambientLight />
        <Control />
      </ThreeScene>
    </main>
  );
}
