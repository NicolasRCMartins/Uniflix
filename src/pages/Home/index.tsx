import {useEffect,useCallback,useState} from "react";
import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import { Banner } from "components/Banner";
import { ContentList } from "components/ContentList";
import { Container, Content } from "./style";
import { Navbar } from "components/Navbar";
import { Layout } from "containers/Layout";
// import { title } from "process";

const Home = () => {
  const [banners, setBanners] = useState<any[]>([])
  const [contents, setContents] = useState<any[]>([])

  const getBanners = useCallback(async () => {
    const { data } = await axios.get("https://api-uniflix.vercel.app/api/banners")

    setBanners(data)
  }, []) 

  const getContents = useCallback(async () => {
    const { data } = await axios.get("https://api-uniflix.vercel.app/api/contents")

    setContents(data)
  }, []) 

  useEffect(() => {
    getBanners()
    getContents()
  }, [])

  return <Layout>
    <Container>
  <Swiper loop={true} autoplay={{ delay: 3000}}>
    {banners.map(banner => <SwiperSlide key={banner.id}><Banner 
    imageUrl={banner.cover}
    description={banner.sinopse}
    title={banner.title}
    url={banner.normalize}></Banner></SwiperSlide>)}
  </Swiper>;

  <Content>
    {contents.map(content => <ContentList data={content}></ContentList>)}
  </Content>
  </Container>
  </Layout>
};

 export { Home };
