import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public hello: string = `\u{1F44B}`;
  public skillIcon: string = `\u{1F4BB}`;

  public skillCategories: any[] = [
    {
      label: 'Framework & Libraries',
      asset: 'code.svg',
      skills: [
        { label: 'Angular', asset: 'angular.svg' },
        { label: 'React', asset: 'react.svg' },
        { label: 'Node.js', asset: 'nodejs.svg' },
        { label: 'JavaScript', asset: 'js.svg' },
        { label: 'TypeScript', asset: 'typescript.svg' },
        { label: 'jQuery', asset: 'jquery.svg' },
        { label: 'MongoDB', asset: 'mongodb.svg' },
        { label: 'HTML5', asset: 'html5.svg' },
        { label: 'CSS3', asset: 'css3.svg' },
        { label: 'Sass', asset: 'sass.svg' }
      ]
    },
    {
      label: 'DevOps & Tools',
      asset: 'tools.svg',
      skills: [
        { label: 'Git', asset: 'git.svg' },
        { label: 'GitHub', asset: 'github.svg' },
        { label: 'GitLab', asset: 'gitlab.svg' },
        { label: 'npm', asset: 'npm.svg' },
        { label: 'VS Code', asset: 'vscode.svg' },
        { label: 'Webpack', asset: 'webpack.svg' },
        { label: 'Docker', asset: 'docker.svg' },
        { label: 'Kubernetes', asset: 'kubernetes.svg' },
        { label: 'Firebase', asset: 'firebase.svg' },
        { label: 'Jenkins', asset: 'jenkins.svg' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
