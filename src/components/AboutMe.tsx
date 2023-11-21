// Import necessary components
import {
  Button,
  ButtonGroup,
  Container,
  Flex
} from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import Contact from './AboutMe/Contact';
import ProblemSolving from './AboutMe/ProblemSolving';


const Sections = ['Skills', 'Education', 'Experiences', 'Achievements', 'Problem Solving', 'Projects', 'Social', 'Contact Me']
// Your component
const YourComponent = () => {
  return (
    <Container maxW="5xl" py={10}>
      {/* Buttons */}
      <Flex justify="space-around" mb={8}>
        <ButtonGroup gap='4' display={'flex'} flexWrap={'wrap'} >
          {Sections.map((section) => (

            <Button key={section}>
              <ScrollLink to={`${section.toLowerCase().replace(/\s/g, '')}Section`} smooth={true} duration={500}>
                {section}
              </ScrollLink>
            </Button>

          ))}
        </ButtonGroup>
      </Flex>




      <ProblemSolving id="problemsolvingSection" />
      <Contact />
    </Container>
  );
};

export default YourComponent;
