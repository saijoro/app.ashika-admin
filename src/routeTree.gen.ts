/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutIndexImport } from './routes/_layout/index'
import { Route as LayoutTestImport } from './routes/_layout/test'
import { Route as LayoutAboutImport } from './routes/_layout/about'
import { Route as LayoutResearchReportsWeeklyInsightsReportsImport } from './routes/_layout/research-reports.weekly-insights-reports'
import { Route as LayoutResearchReportsDailyInsightsReportsImport } from './routes/_layout/research-reports.daily-insights-reports'
import { Route as LayoutResearchReportsWeeklyInsightReportsAddImport } from './routes/_layout/research-reports.weekly-insight-reports.add'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutTestRoute = LayoutTestImport.update({
  path: '/test',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAboutRoute = LayoutAboutImport.update({
  path: '/about',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutResearchReportsWeeklyInsightsReportsRoute =
  LayoutResearchReportsWeeklyInsightsReportsImport.update({
    path: '/research-reports/weekly-insights-reports',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutResearchReportsDailyInsightsReportsRoute =
  LayoutResearchReportsDailyInsightsReportsImport.update({
    path: '/research-reports/daily-insights-reports',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutResearchReportsWeeklyInsightReportsAddRoute =
  LayoutResearchReportsWeeklyInsightReportsAddImport.update({
    path: '/research-reports/weekly-insight-reports/add',
    getParentRoute: () => LayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/_layout/about': {
      id: '/_layout/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof LayoutAboutImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/test': {
      id: '/_layout/test'
      path: '/test'
      fullPath: '/test'
      preLoaderRoute: typeof LayoutTestImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/research-reports/daily-insights-reports': {
      id: '/_layout/research-reports/daily-insights-reports'
      path: '/research-reports/daily-insights-reports'
      fullPath: '/research-reports/daily-insights-reports'
      preLoaderRoute: typeof LayoutResearchReportsDailyInsightsReportsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/research-reports/weekly-insights-reports': {
      id: '/_layout/research-reports/weekly-insights-reports'
      path: '/research-reports/weekly-insights-reports'
      fullPath: '/research-reports/weekly-insights-reports'
      preLoaderRoute: typeof LayoutResearchReportsWeeklyInsightsReportsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/research-reports/weekly-insight-reports/add': {
      id: '/_layout/research-reports/weekly-insight-reports/add'
      path: '/research-reports/weekly-insight-reports/add'
      fullPath: '/research-reports/weekly-insight-reports/add'
      preLoaderRoute: typeof LayoutResearchReportsWeeklyInsightReportsAddImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutAboutRoute: typeof LayoutAboutRoute
  LayoutTestRoute: typeof LayoutTestRoute
  LayoutIndexRoute: typeof LayoutIndexRoute
  LayoutResearchReportsDailyInsightsReportsRoute: typeof LayoutResearchReportsDailyInsightsReportsRoute
  LayoutResearchReportsWeeklyInsightsReportsRoute: typeof LayoutResearchReportsWeeklyInsightsReportsRoute
  LayoutResearchReportsWeeklyInsightReportsAddRoute: typeof LayoutResearchReportsWeeklyInsightReportsAddRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutAboutRoute: LayoutAboutRoute,
  LayoutTestRoute: LayoutTestRoute,
  LayoutIndexRoute: LayoutIndexRoute,
  LayoutResearchReportsDailyInsightsReportsRoute:
    LayoutResearchReportsDailyInsightsReportsRoute,
  LayoutResearchReportsWeeklyInsightsReportsRoute:
    LayoutResearchReportsWeeklyInsightsReportsRoute,
  LayoutResearchReportsWeeklyInsightReportsAddRoute:
    LayoutResearchReportsWeeklyInsightReportsAddRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/login': typeof LoginRoute
  '/about': typeof LayoutAboutRoute
  '/test': typeof LayoutTestRoute
  '/': typeof LayoutIndexRoute
  '/research-reports/daily-insights-reports': typeof LayoutResearchReportsDailyInsightsReportsRoute
  '/research-reports/weekly-insights-reports': typeof LayoutResearchReportsWeeklyInsightsReportsRoute
  '/research-reports/weekly-insight-reports/add': typeof LayoutResearchReportsWeeklyInsightReportsAddRoute
}

export interface FileRoutesByTo {
  '/login': typeof LoginRoute
  '/about': typeof LayoutAboutRoute
  '/test': typeof LayoutTestRoute
  '/': typeof LayoutIndexRoute
  '/research-reports/daily-insights-reports': typeof LayoutResearchReportsDailyInsightsReportsRoute
  '/research-reports/weekly-insights-reports': typeof LayoutResearchReportsWeeklyInsightsReportsRoute
  '/research-reports/weekly-insight-reports/add': typeof LayoutResearchReportsWeeklyInsightReportsAddRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/login': typeof LoginRoute
  '/_layout/about': typeof LayoutAboutRoute
  '/_layout/test': typeof LayoutTestRoute
  '/_layout/': typeof LayoutIndexRoute
  '/_layout/research-reports/daily-insights-reports': typeof LayoutResearchReportsDailyInsightsReportsRoute
  '/_layout/research-reports/weekly-insights-reports': typeof LayoutResearchReportsWeeklyInsightsReportsRoute
  '/_layout/research-reports/weekly-insight-reports/add': typeof LayoutResearchReportsWeeklyInsightReportsAddRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/login'
    | '/about'
    | '/test'
    | '/'
    | '/research-reports/daily-insights-reports'
    | '/research-reports/weekly-insights-reports'
    | '/research-reports/weekly-insight-reports/add'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/login'
    | '/about'
    | '/test'
    | '/'
    | '/research-reports/daily-insights-reports'
    | '/research-reports/weekly-insights-reports'
    | '/research-reports/weekly-insight-reports/add'
  id:
    | '__root__'
    | '/_layout'
    | '/login'
    | '/_layout/about'
    | '/_layout/test'
    | '/_layout/'
    | '/_layout/research-reports/daily-insights-reports'
    | '/_layout/research-reports/weekly-insights-reports'
    | '/_layout/research-reports/weekly-insight-reports/add'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
  LoginRoute: typeof LoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
  LoginRoute: LoginRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout",
        "/login"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/about",
        "/_layout/test",
        "/_layout/",
        "/_layout/research-reports/daily-insights-reports",
        "/_layout/research-reports/weekly-insights-reports",
        "/_layout/research-reports/weekly-insight-reports/add"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/_layout/about": {
      "filePath": "_layout/about.tsx",
      "parent": "/_layout"
    },
    "/_layout/test": {
      "filePath": "_layout/test.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/research-reports/daily-insights-reports": {
      "filePath": "_layout/research-reports.daily-insights-reports.tsx",
      "parent": "/_layout"
    },
    "/_layout/research-reports/weekly-insights-reports": {
      "filePath": "_layout/research-reports.weekly-insights-reports.tsx",
      "parent": "/_layout"
    },
    "/_layout/research-reports/weekly-insight-reports/add": {
      "filePath": "_layout/research-reports.weekly-insight-reports.add.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
