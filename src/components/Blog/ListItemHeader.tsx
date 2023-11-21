import { Box, Image, Heading, Text } from "@chakra-ui/react"
import BlogTags from './Tags';

interface BlogImageSource {
    imageSrc: string

}

const ArticleImage = (props: BlogImageSource) => {

    return (
        <Box borderRadius="lg" overflow="hidden">
            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                    transform="scale(1.0)"
                    src={props.imageSrc}
                    alt="some text"
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                        transform: 'scale(1.05)',
                    }}
                />
            </Box>
        </Box>
    )

}

interface BlogHeaderSection {
    imageSrc: string
    title: string
    tags: string[]

}

const HeaderSection = (props: BlogHeaderSection) => {

    return (
        <>
            <ArticleImage imageSrc={props.imageSrc} />
            <BlogTags tags={props.tags} marginTop={3} />
            <Heading fontSize="xl" marginTop="2">
                <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    {props.title}
                </Text>
            </Heading>
        </>


    )
}

export default HeaderSection