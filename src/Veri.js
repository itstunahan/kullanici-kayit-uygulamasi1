import * as React from 'react';
import { ListItem, ListItemLabel } from 'baseui/list';
import { useStyletron } from 'baseui';

const Veri = (props) => {
  const [css] = useStyletron();
  return (
    <ul
      className={css({
        width: '375px',
        paddingLeft: 0,
        paddingRight: 0,
      })}
    >
      {props.ornekVeri.map((veri) => (
        <ListItem key={veri.id}>
          <ListItemLabel description={veri.ikinciKutu}>
            {veri.ilkKutu}
          </ListItemLabel>
        </ListItem>
      ))}
    </ul>
  );
};

export default Veri;
