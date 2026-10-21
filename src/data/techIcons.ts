import angular from 'devicon/icons/angular/angular-plain.svg?raw';
import dotnet from 'devicon/icons/dot-net/dot-net-plain.svg?raw';
import dotnetcore from 'devicon/icons/dotnetcore/dotnetcore-plain.svg?raw';
import sqlserver from 'devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg?raw';
import entityframework from 'devicon/icons/entityframeworkcore/entityframeworkcore-plain.svg?raw';
import azure from 'devicon/icons/azure/azure-plain.svg?raw';
import azuredevops from 'devicon/icons/azuredevops/azuredevops-plain.svg?raw';
import xamarin from 'devicon/icons/xamarin/xamarin-original.svg?raw';
import openapi from 'devicon/icons/openapi/openapi-plain.svg?raw';
import typescript from 'devicon/icons/typescript/typescript-plain.svg?raw';
import react from 'devicon/icons/react/react-original.svg?raw';
import nextjs from 'devicon/icons/nextjs/nextjs-plain.svg?raw';
import expo from 'devicon/icons/expo/expo-original.svg?raw';
import go from 'devicon/icons/go/go-plain.svg?raw';
import grpc from 'devicon/icons/grpc/grpc-plain.svg?raw';
import postgresql from 'devicon/icons/postgresql/postgresql-plain.svg?raw';
import mongodb from 'devicon/icons/mongodb/mongodb-plain.svg?raw';
import redis from 'devicon/icons/redis/redis-plain.svg?raw';
import docker from 'devicon/icons/docker/docker-plain.svg?raw';
import aws from 'devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg?raw';
import githubactions from 'devicon/icons/githubactions/githubactions-plain.svg?raw';

function normalize(svg: string): string {
  return svg
    .replace(/<\?xml[^>]*\?>/g, '')
    .replace(/<!DOCTYPE[^>]*>/g, '')
    .replace(/fill="(?!none)[^"]*"/g, 'fill="currentColor"')
    .replace(/\s(width|height)="[^"]*"/g, '');
}

export const techIcons: Record<string, string> = {
  angular: normalize(angular),
  dotnet: normalize(dotnet),
  dotnetcore: normalize(dotnetcore),
  sqlserver: normalize(sqlserver),
  entityframework: normalize(entityframework),
  azure: normalize(azure),
  azuredevops: normalize(azuredevops),
  xamarin: normalize(xamarin),
  openapi: normalize(openapi),
  typescript: normalize(typescript),
  react: normalize(react),
  nextjs: normalize(nextjs),
  expo: normalize(expo),
  go: normalize(go),
  grpc: normalize(grpc),
  postgresql: normalize(postgresql),
  mongodb: normalize(mongodb),
  redis: normalize(redis),
  docker: normalize(docker),
  aws: normalize(aws),
  githubactions: normalize(githubactions),
};
