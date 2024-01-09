import { useEffect, useRef } from "react";
import reactScroll from "react-scroll";
import Layout from "../components/Layout/Layout"
import styles from "./MainPage.module.scss"

function MainPage(){
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // 섹션의 위치를 확인하고, 현재 보여지는 섹션을 계산
      const currentSection = sectionRefs.current.findIndex(
        (section) =>
          section &&
          section.offsetTop <= scrollTop &&
          section.offsetTop + section.offsetHeight > scrollTop
      );

      console.log("Current Section:", currentSection + 1);
      // 여기에서 원하는 동작 수행

      // 예를 들어, 현재 섹션 번호를 출력하거나 다른 동작 수행 가능
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return(
    <Layout>
      <reactScroll.Element name="section1" className={styles.section} id="1">
      <div ref={(ref) => (sectionRefs.current[0] = ref)}>1</div>
      </reactScroll.Element>
      <reactScroll.Element name="section1" className={styles.section} id="2">
      <div ref={(ref) => (sectionRefs.current[1] = ref)}>2</div>
      </reactScroll.Element>
      <reactScroll.Element name="section1" className={styles.section} id="3">
      <div ref={(ref) => (sectionRefs.current[2] = ref)}>3</div>
      </reactScroll.Element>
      <reactScroll.Element name="section1" className={styles.section} id="4">
      <div ref={(ref) => (sectionRefs.current[3] = ref)}>4</div>
      </reactScroll.Element>
      <reactScroll.Element name="section1" className={styles.section} id="5">
      <div ref={(ref) => (sectionRefs.current[4] = ref)}>5</div>
      </reactScroll.Element>
    </Layout>
  )
}

export default MainPage