using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace AppEdu_Danca.Telas
{
    /// <summary>
    /// Lógica interna para Dashboard.xaml
    /// </summary>
    public partial class Dashboard : Window
    {
        public Dashboard()
        {
            InitializeComponent();
        }
        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            var CadastroTurma = new CadastroTurma();
            this.Close();
            CadastroTurma.ShowDialog();
        }

        private void Button_Click_2(object sender, RoutedEventArgs e)
        {
            var CadastroAluno = new CadastroAluno();
            this.Close();
            CadastroAluno.ShowDialog();
        }

        private void Button_Click_3(object sender, RoutedEventArgs e)
        {
            var CadastroCurso = new CadastroCurso();
            this.Close();
            CadastroCurso.Show();
        }

        private void Button_Click_4(object sender, RoutedEventArgs e)
        {
            var VisualizarAluno = new VisualizarAluno();
            this.Close();
            VisualizarAluno.Show();
        }

        private void Button_Click_5(object sender, RoutedEventArgs e)
        {
            var VisualizarCurso = new VisualizarCurso();
            this.Close();
            VisualizarCurso.Show();
        }

        private void Button_Click_6(object sender, RoutedEventArgs e)
        {
            var VisualizarTurma = new VisualizarTurma();
            this.Close();
            VisualizarTurma.Show();
        }

        private void Button_Click_7(object sender, RoutedEventArgs e)
        {
            var VisualizarEscola = new VisualizarEscola();
            this.Close();
            VisualizarEscola.ShowDialog();
        }
        private void Button_Click(object sender, RoutedEventArgs e)
        {

        }
    }
}
