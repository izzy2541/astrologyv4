import SignIcon from './SignIcon';
import Container from '../ui/Container';
//import styles from './SignList.module.scss';

function SignList(props) {
  return (
    <Container>
      {props.loadedSigns.map((signs) => (
        <SignIcon
          key={signs.id}
          id={signs.id}
          title={signs.title}
          date={signs.date}
          description={signs.description}
          element={signs.element}
          image={signs.image}   
        />
        
      ))}

    </Container>
  );
  
}

export default SignList;