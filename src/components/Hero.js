import FullScreenSection from './FullScreenSection'
import { VStack, Heading } from '@chakra-ui/react'

const Hero = () => {
    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet'></link>
            <FullScreenSection
                backgroundColor="#495E57"
            >
                <VStack
                    h='318px'
                >
                    <Heading
                        fontFamily='Markazi Text'
                        color='#F4CE14'
                        fontSize='64px'
                    >
                        Little Lemon
                    </Heading>
                    <Heading
                        fontFamily='Markazi Text'
                        color='white'
                        fontSize='40px'
                    >
                        Chicago
                    </Heading>
                    <Heading
                        fontFamily='Karla'
                        fontSize={18}
                        noOfLines={5}
                        maxW='245px'
                        color='white'
                    >
                        We are a family owened
                        Mediterranean restaurant,
                        focused on traditional
                        recipes served with a modern
                        twist.
                    </Heading>
                </VStack>
            </FullScreenSection>
        </>
    )
}
export default Hero