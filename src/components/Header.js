import { Box, HStack } from '@chakra-ui/react'
import logo from '../logo.svg'

const Header = () => {

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }

    return (
        <Box
            backgroundColor='white'
        >
            <link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet'></link>
            <nav>
                <HStack
                    spacing={61}
                    h='136px'
                    fontFamily='Karla'
                    fontSize='18px'
                    fontWeight='bold'
                >
                    <img src={logo} alt="logo" width='200px'/>
                    <a href='#about' onClick={handleClick('about')}>
                        About
                    </a>
                </HStack>
            </nav>
        </Box>
    )
}
export default Header