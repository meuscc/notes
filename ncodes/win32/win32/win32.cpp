#include "win32.h"

#include "framework.h"

const auto MainWinClassName = L"主窗口类名";
const auto MainWinTitle = L"主窗口标题";

// 主窗口消息处理函数
LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam,
                         LPARAM lParam) {
  switch (message) {
    case WM_CREATE: {
      MessageBox(NULL, L"sdfs", L"sdfsf", MB_OK);
    }
    case WM_COMMAND: {
      int wmId = LOWORD(wParam);
      // Parse the menu selections:
      switch (wmId) {
        case IDM_ABOUT:
          //
          break;
        case IDM_EXIT:
          DestroyWindow(hWnd);
          break;
        default:
          return DefWindowProc(hWnd, message, wParam, lParam);
      }
    } break;
    case WM_PAINT: {
      PAINTSTRUCT ps;
      HDC hdc = BeginPaint(hWnd, &ps);
      // TODO: Add any drawing code that uses hdc here...
      EndPaint(hWnd, &ps);
    } break;
    case WM_DESTROY:
      PostQuitMessage(0);
      break;
    default:
      return DefWindowProc(hWnd, message, wParam, lParam);
  }
  return 0;
}

// 人口函数
int APIENTRY wWinMain(_In_ HINSTANCE hInstance,
                      _In_opt_ HINSTANCE hPrevInstance, _In_ LPWSTR lpCmdLine,
                      _In_ int nCmdShow) {
  // 注册主窗口类
  WNDCLASSEXW wcex;
  wcex.cbSize = sizeof(WNDCLASSEX);
  wcex.style = CS_HREDRAW | CS_VREDRAW;
  wcex.lpfnWndProc = WndProc;
  wcex.cbClsExtra = 0;
  wcex.cbWndExtra = 0;
  wcex.hInstance = hInstance;
  wcex.hIcon = LoadIcon(hInstance, MAKEINTRESOURCE(IDI_WIN32));
  wcex.hCursor = LoadCursor(nullptr, IDC_ARROW);
  wcex.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);
  wcex.lpszMenuName = MAKEINTRESOURCEW(IDC_WIN32);
  wcex.lpszClassName = MainWinClassName;
  wcex.hIconSm = LoadIcon(wcex.hInstance, MAKEINTRESOURCE(IDI_SMALL));
  if (!RegisterClassExW(&wcex)) {
    return FALSE;
  }

  // 创建主窗口
  HWND hWnd = CreateWindowW(MainWinClassName, MainWinTitle, WS_OVERLAPPEDWINDOW,
                            CW_USEDEFAULT, 0, CW_USEDEFAULT, 0, nullptr,
                            nullptr, hInstance, nullptr);
  if (!hWnd) {
    return FALSE;
  }
  ShowWindow(hWnd, nCmdShow);
  UpdateWindow(hWnd);

  // 主窗口消息循环
  MSG msg;
  while (1) {
    if (PeekMessage(&msg, NULL, 0, 0, PM_NOREMOVE)) {
      if (GetMessage(&msg, nullptr, 0, 0)) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
      } else {
        return (int)msg.wParam;
      }
    } else {
      // 空闲处理
    }
  }
  return (int)msg.wParam;
}
