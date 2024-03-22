import { VStack } from '@chakra-ui/react'

const FullScreenSection = ({children, ...boxProps}) => {
    return (
        <VStack backgroundColor={boxProps.backgroundColor} >
            <VStack {...boxProps}>
                {children}
            </VStack>
        </VStack>
    )
}
export default FullScreenSection