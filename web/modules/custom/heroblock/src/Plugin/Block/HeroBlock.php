<?php

namespace Drupal\heroblock\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Hero' Block using the Site Theme Logo as the background image.
 *
 * @Block(
 *   id = "hero_block",
 *   admin_label = @Translation("Hero block"),
 *   category = @Translation("Hero block"),
 * )
 */
class HeroBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $site_config = \Drupal::config('system.site');

    $siteName = $site_config->get('name');
    $siteSlogan = $site_config->get('slogan');

    $siteLogo = \theme_get_setting("logo");

    $modulePath =
      \Drupal::service('extension.path.resolver')
      ->getPath('module', 'heroblock');

    $imageElement = "<img alt='photo of William H Bownam' src='" . $siteLogo['url'] . "' />";
    $nameElement = "<p class='site-title'><a href='/' title='Home'>$siteName</a></p>";
    $sloganElement = "<p class='site-slogan'>$siteSlogan</p>";

    return [
      '#prefix' => "<div class='heroblock'>",
      '#suffix' => '</div>',
      '#markup' => $imageElement . $nameElement . $sloganElement,
      '#attached' => ['library' => ['heroblock/heroblock']],
    ];
  }

}
