import { HStack, Image, Text } from "@chakra-ui/react"

interface BlogAuthorProps {
    date: Date
}
const BlogAuthor = (props: BlogAuthorProps) => {


    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src='https://avatars.githubusercontent.com/u/63257806?s=96&v=4'
                alt={`Avatar of Parvez Ahammed`}
            />
            <Text fontWeight="medium">Parvez Ahammed</Text>
            <Text>—</Text>
            <Text>{props.date.toLocaleDateString()}</Text>
        </HStack>
    )
}

export default BlogAuthor