import { Text } from "@chakra-ui/react"

interface BlogShorDescription {
    description: string

}

const ShortDescription = (props: BlogShorDescription) => {
    return (
        <Text as="p" fontSize="md" marginTop="2">
            {props.description}
        </Text>
    )
}

export default ShortDescription