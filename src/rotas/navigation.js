import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../paginas/Home';
import Login from '../paginas/Login';
import Cadastro from '../paginas/Cadastro';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListaPets from '../paginas/ListaPets';
import Mensagem from '../paginas/Mensagem'
import { Image } from "react-native";
import Sobre from '../paginas/Sobre';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Perfil from '../paginas/Perfil';

const Stack = createStackNavigator();// pilha
const Tab = createBottomTabNavigator(); // no rodapé
const Drawer = createDrawerNavigator();// menu lateral

function DrawerRoutes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {//para mudar o style do Drawer
                    backgroundColor: '#36D6AD'
                },
                drawerLabelStyle: {// para mudar o style de cada label/linha
                    color: '#FFF',
                    fontSize: 14,
                    fontFamily: 'PoppinsRegular',
                    fontWeight: '400',
                    lineHeight: 20
                }
            }}>
            <Drawer.Screen
                name='Lista de Pets'
                component={TabRoutes}//para rederizar o Tab dentro do drawer
                options={{
                    drawerLabel: 'Pets para adoção',//drawerlabel para mudar o nome que aparece no drawer
                    drawerIcon: () => (<Image source={require('../assets/pets.png')} style={{ width: 24, height: 24 }} ></Image>),
                    headerTransparent: true,// para deixar o Header/cabeçalho do drawer transparent
                    title: ''//para desaparecer o título da tela no cabeçalho
                }} />
            <Drawer.Screen
                name='Perfil'
                component={Perfil} />
            <Drawer.Screen
                name='Sair'
                component={Home} />
        </Drawer.Navigator>
    )
}

function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen name="Lista de Pets" component={ListaPets}
                options={{
                    tabBarIcon: () => ( // icóne do tab 
                        <Image source={require('../assets/pets-green.png')} style={{ width: 24, height: 24 }} />
                    )
                }} />
            <Tab.Screen name="Mensagem" component={Mensagem}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('../assets/mensagens.png')} style={{ width: 24, height: 24 }} />
                    )
                }} />
        </Tab.Navigator>
    );

}

export default function Navigation() {// container que abrange as rotas do Projeto
    //NavigationContainer é a classe Pai das navegações
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                screenOptions={{//screenOptions aplica a configuração em todas as telas
                    headerTitle: '',//título do cabeçalho
                    headerShown: false//tirar a visualização do header
                }}>
                <Stack.Screen name='Home'
                    component={Home} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Cadastro' component={Cadastro} />
                <Stack.Screen name='Drawer' component={DrawerRoutes} />
                <Stack.Screen name='Sobre' component={Sobre} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}