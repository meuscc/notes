#include <iostream>
#include <opencv2/opencv.hpp>

using namespace cv;
using namespace std;

int main(int args, char** argv) {
  Mat src =
      imread("C:/Users/ysh35/Pictures/Saved Pictures/1.png", IMREAD_GRAYSCALE);
  if (src.empty()) {
    printf("could not load image");
    return -1;
  }

  namedWindow("输入窗口", WINDOW_FREERATIO);
  imshow("输入窗口", src);

  waitKey(0);
  return 0;
}