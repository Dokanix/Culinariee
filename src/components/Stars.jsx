import Icon from './Icon';

const Stars = ({ count }) => {
  return (
    <div>
      {[...Array(count)].map((el, i) => (
        <Icon key={i} margin='0' color='rgb(var(--color-gold))'>
          star
        </Icon>
      ))}
      {[...Array(5 - count)].map((el, i) => (
        <Icon key={i} margin='0' color='rgb(var(--color-gold))'>
          star_border
        </Icon>
      ))}
    </div>
  );
};

export default Stars;
