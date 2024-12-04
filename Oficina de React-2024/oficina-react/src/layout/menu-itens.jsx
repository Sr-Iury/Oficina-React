
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { HiMiniHome } from "react-icons/hi2";
import { paths } from '../router/paths';

export const MenuItens = () => {

    const listItens = [
        {
            name: 'Home',
            path: paths.home,
            icon: <HiMiniHome />,
        },
    ]


    return (
        <List>
            {listItens.map((item) => (
                <ListItem
                    disablePadding
                    key={item.name}
                    onClick={() =>
                        window.location.replace(item.path)
                    }
                >
                    <ListItemButton>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        {item.name}
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}
